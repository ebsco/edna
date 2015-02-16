packageName=edna
scmtrigger=false
branch=
app_dir=/home/ep/buzz/$(packageName)
deployment_hostname=ep@eae-buzzdev801.epnet.com

install :
	npm install -g git+http://as-gitmaster.epnet.com:7990/scm/rd/npm-preinstall.git#v0.2.2

	npm-preinstall
	npm install --unsafe-perm


release :
	make install
	grunt release:production --branch=$(branch) --scmtrigger=$(scmtrigger)


develop :
	make install
	grunt release:develop --branch=$(branch) --scmtrigger=$(scmtrigger)


deploy :
	make develop

	# Stop the app
	ssh $(deployment_hostname) cd $(app_dir)\; sudo /etc/init.d/node-$(packageName) stop > /dev/null 2>&1

	# Get rid of old installs
	ssh $(deployment_hostname) sudo rm -rf $(app_dir)
	ssh $(deployment_hostname) mkdir -p $(app_dir)

	# Copy files over to remote machine
	scp -r ./ $(deployment_hostname):$(app_dir)

	# start the app
	ssh $(deployment_hostname) cd $(app_dir)\; sudo /etc/init.d/node-$(packageName) start
