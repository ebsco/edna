packageName=edna
scmtrigger=false
branchName=release
app_dir=/home/ep/buzz/interfaces/$(packageName)
deployment_hostname=ep@eae-buzzdev801.epnet.com
buildRev=''

clean :
	ssh $(deployment_hostname) cd $(app_dir)\; sudo /etc/init.d/node-$(packageName) stop > /dev/null 2>&1
	ssh $(deployment_hostname) cd $(app_dir)\; rm -f $(app_dir)/app.pid
	# Get rid of old installs
	ssh $(deployment_hostname) sudo rm -rf $(app_dir)
	ssh $(deployment_hostname) mkdir -p $(app_dir)


install :
	if [[ `which npm-preinstall` != *npm-preinstall* ]]; then \
		npm install -g git+http://as-gitmaster:7990/scm/rd/npm-preinstall.git; \
	fi

	npm-preinstall
	npm install --unsafe-perm


build :
	make install
	grunt --buildNumber=$(buildRev)


deploy :
	make clean
	make build

	# Copy files over to remote machine
	scp -r ./ $(deployment_hostname):$(app_dir)

	# start the app
	ssh $(deployment_hostname) cd $(app_dir)\; make start_app


release :
	make build
	grunt release --branchName=$(branchName) --scmtrigger=$(scmtrigger)


start_app :
	sudo /etc/init.d/node-$(packageName) start

