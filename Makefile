scmtrigger=false
branch=
packageName=edna
app_dir=/home/ep/buzz/$(packageName)
deployment_hostname=ep@eae-buzzdev801.epnet.com

get-preinstall :
	npm install -g git+http://as-gitmaster.epnet.com:7990/scm/rd/npm-preinstall.git#v0.2.3


release :
	make get-preinstall
	npm-preinstall
	npm install --unsafe-perm

	grunt release:production --branch=$(branch) --scmtrigger=$(scmtrigger)


develop :
	make get-preinstall
	npm-preinstall no-sync
	npm install --unsafe-perm

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
