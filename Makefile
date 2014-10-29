packageName=edna
scmtrigger=false
branch=
app_dir=/home/ep/buzz/$(packageName)
deployment_hostname=ep@eae-buzzdev801.epnet.com

clean :
	ssh $(deployment_hostname) sudo /etc/init.d/node-$(packageName) stop > /dev/null 2>&1
	ssh $(deployment_hostname) rm -f $(app_dir)/app.pid
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
	grunt


deploy :
	make clean
	make build

	# Copy files over to remote machine
	scp -r ./ $(deployment_hostname):$(app_dir)

	# start the app
	ssh $(deployment_hostname) sudo /etc/init.d/node-$(packageName) start


release :
	make build
	grunt release --branch=$(branch) --scmtrigger=$(scmtrigger)


