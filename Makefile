segment=patch
remote=origin
branch=develop
packageName=edna
npmPublish=true
createTag=false
scmtrigger=false
app_dir=/home/ep/buzz/$(packageName)
deployment_hostname=ep@eae-buzzdev801.epnet.com

build :
	make _check;
	if [[ -f outdated ]]; \
	then \
		grunt build; \
	fi;
	make _cleanup;

test :
	if [[ -f outdated ]]; \
	then \
		grunt quality-check; \
	fi;

publish :
	make _publish;

deploy :
	if [[ -f outdated ]]; \
	then \
		ssh $(deployment_hostname) cd $(app_dir)\; sudo /etc/init.d/node-$(packageName) stop > /dev/null 2>&1; \
		ssh $(deployment_hostname) sudo rm -rf $(app_dir); \
		ssh $(deployment_hostname) mkdir -p $(app_dir); \
		scp -r ./ $(deployment_hostname):$(app_dir); \
		ssh $(deployment_hostname) cd $(app_dir)\; sudo /etc/init.d/node-$(packageName) start; \
	fi;

include node_modules/buzz-makefile/shared.mk
