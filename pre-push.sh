#!/bin/bash
if [ -e ".git/hooks/pre-push" ]
then
	echo "A pre-push hook was found!"
else
	echo "No pre-push hook not found.",
	echo "Installing a pre-push...",
	cp pre-push .git/hooks/pre-push
	echo "Finished!",
fi