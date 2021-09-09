#!/bin/sh

echo "Installing dependencies from lock file for client"

cd client
npm ci || exit 1

echo "Creating local env file for client"

printf "NEXT_PUBLIC_URL='http://localhost:3000'\nSEARCH_URL='http://localhost:3001/search'\nNEXT_PUBLIC_GTM_ID='GTM-TB4NLS7'" > .env

echo "Installing dependencies from lock file for backend"

cd backend
npm ci || exit 1

echo "Creating local env file for client"

printf "ORIGIN_URL=''\nSEARCH_API_AUTH_TOKEN=''\nSEARCH_API_URL=''" > .env
