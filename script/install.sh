#!/bin/sh

echo "Installing dependencies from lock file"

npm ci || exit 1

echo "Creating local env file"

printf "NEXT_PUBLIC_URL='http://localhost:3000'\nNEXT_PUBLIC_GTM_ID='GTM-TB4NLS7'\nSEARCH_API_AUTH_TOKEN=''\nSEARCH_API_URL=''" > .env
