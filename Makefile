segment=prerelease
remote=origin
branch=develop
packageName=edna
npmPublish=false
createTag=false
scmtrigger=false
dev=true
upstream=""
app_dir=/home/ep/buzz/$(packageName)
deployment_hostname=ep@eae-buzzdev801.epnet.com

_build :
	grunt build

_test :
	grunt build --lint

_precommit :
	echo 'Happy EDNA is commiting'

_deploy :
	exit 0

include node_modules/buzz-makefile/shared.mk
