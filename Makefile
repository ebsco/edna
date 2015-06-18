segment=prerelease
remote=origin
branch=develop
packageName=edna
npmPublish=false
createTag=false
scmtrigger=false
upstream=""
app_dir=/home/ep/buzz/$(packageName)
deployment_hostname=ep@eae-buzzdev801.epnet.com

_build :
	grunt build

_test :
	grunt quality-check

_precommit :
	echo 'Happy EDNA is commiting'

include node_modules/buzz-makefile/shared.mk
