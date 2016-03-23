#! /usr/bin/env sh

url="https://github.com/connors/photon/releases/download/v0.1.2-alpha/photon-0.1.2-dist.zip"

mkdir -p tmp
rm -r ./tmp/photon

wget $url -O ./tmp/photon-0.1.2-dist.zip
unzip ./tmp/photon-0.1.2-dist.zip -d ./tmp
mv ./tmp/photon-0.1.2-dist ./tmp/photon

mkdir -p css
cp tmp/photon/css/photon.min.css css/photon.min.css

mkdir -p fonts
cp tmp/photon/fonts/* fonts

