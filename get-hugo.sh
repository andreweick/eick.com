#!/bin/bash
DIR=${PWD}

HUGO_TYPE='extended'
# Check for positional parameter, if found we assume it's the intended version
if [ ! $1 ]; then
#Required to be SET. TODO: Test for this, and if version is not present load from present. Use something like https://zwbetz.com/script-to-install-latest-hugo-release-on-linux-and-mac/
    HUGO_VERSION=$(node -p "require('./package.json').hugo.version")
    HUGO_TYPE=$(node -p "require('./package.json').hugo.extended")
else
    HUGO_VERSION=$1
fi

FILE=hugo_${HUGO_VERSION}

set -e

if [ -n $HUGO_VERSION ]; then
    echo Installing $HUGO_VERSION
else
    exit
fi

#
if [ $HUGO_TYPE != false ] || [ $HUGO_TYPE != "false" ]; then
    echo WE ARE Using Hugo Extended
    EXTENDED="extended_"
else
    echo NOT Using Hugo Extended
    EXTENDED=""
fi

echo Cleaning bin directory

if [ -d ${PWD}/bin ]; then
    rm -rf ${PWD}/bin
fi

echo Make temp directory

mkdir -p ${PWD}/temp ${PWD}/bin

echo Move to temp directory

pushd ${PWD}/temp

echo Current Directory: ${PWD}

# Get operating system name
SYSTEM_STRING=`uname -s`
if [ $SYSTEM_STRING == "Darwin" ]; then
   PLATFORM_STRING="macOS"
else
   PLATFORM_STRING=$SYSTEM_STRING
fi

# Get ARM or Intel
UNAME_ARCH=`uname -m`
if [ $UNAME_ARCH == 'x86_64' ]; then
   ARCHITECTURE_STRING="64bit"
else
   ARCHITECTURE_STRING="ARM64"
fi

curl -L https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${EXTENDED}${HUGO_VERSION}_${PLATFORM_STRING}-${ARCHITECTURE_STRING}.tar.gz -o ${FILE}.tar.gz

TARBALL=${FILE}.tar.gz

echo Extracting $TARBALL

tar --extract --file $TARBALL

# do we need sudo command for these?
chmod +x hugo

mv hugo $DIR/bin/${FILE}

# Clean up temp directory (popd) ?
rm -rf $DIR/temp

location="$(which $DIR/bin/${FILE})"
echo "Hugo binary location: $location"

version="$($DIR/bin/${FILE} version)"
echo $version