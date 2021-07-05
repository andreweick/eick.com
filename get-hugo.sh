#!/bin/bash
# A docker specific version (https://gist.github.com/exavolt/80cbdf4148fac42ab367eea793b8d4ac) uses chained containers and the build go system to create it.  I like this version better to just download it from the github release page.

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

# Try to decode the architecture from the arch command.  I'm not sure what apple silicon returns

arch=`arch`
case $arch in
    arm64 | aarch64) 
        ARCH="ARM64"
        ;;
    x86_64 | i386)
        ARCH="64bit"
        ;;
    arm32 | armhf)
        ARCH="ARM"
        ;;
    *)
        echo Your machine kernel architecture $arch is unkown and not supported by the script
        exit 1
esac

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
    rm -rf ${PWD}/bin/hugo_*
fi

echo Make temp directory

TEMPDIR=$(mktemp -d) || { echo "Failed to create temp directory"; exit 1; }

if [ -f "/etc/os-release" ]; then
    # Linux of some flavor.  If I need to add specific detection, this is how I might do it
    # Hugo downloads make a different download for BSD
    OSVER=`grep '^ID=' /etc/os-release`
    case $OSVER in
        ID=debian)
            OS=Linux
            ;;
        ID="centos")
            OS=Linux
            ;;
    esac
else
    OS=`sw_vers -productName`       #macOS on my mac
fi

curl -L https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${EXTENDED}${HUGO_VERSION}_${OS}-${ARCH}.tar.gz --output ${TEMPDIR}/hugo_${EXTENDED}${HUGO_VERSION}_${OS}-${ARCH}.tar.gz

curl -L https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_checksums.txt --output ${TEMPDIR}/checksums.txt

# Get the checksum and see if checksum is listed anywhere in the checksum file
CHECKSUM=$(shasum --algorithm 256 ${TEMPDIR}/hugo_${EXTENDED}${HUGO_VERSION}_${OS}-${ARCH}.tar.gz | cut -f1 -d' ')

ISCHECKSUMFOUND=`grep ${CHECKSUM} ${TEMPDIR}/checksums.txt`

if [ -z "$ISCHECKSUMFOUND" ]; then
    echo "CHECKSUM not found ... exiting"
    exit
fi


tar --extract --file ${TEMPDIR}/*.tar.gz --directory ${TEMPDIR}

# do we need sudo command for these?
chmod +x ${TEMPDIR}/hugo

mv ${TEMPDIR}/hugo $DIR/bin/${FILE}

# The OS will delete the temporary directory at some point

location="$(which $DIR/bin/${FILE})"
echo "Hugo binary location: $location"

version="$($DIR/bin/${FILE} version)"
echo $version