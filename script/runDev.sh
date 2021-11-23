#!/bin/sh

echo "Creating static builds directory"

mkdir -p public/builds

echo "Creating a placeholder static build file"

echo "{}" > public/builds/globalData.json

echo "Starting dev server"

next dev || exit 1
