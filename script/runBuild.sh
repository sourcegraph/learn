#!/bin/sh

echo "Creating a placeholder static build file"

echo "{}" > public/builds/globalData.json

echo "Creating an optimized production build"

next build && next export || exit 1
