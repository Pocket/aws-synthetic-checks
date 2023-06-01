#!/bin/bash

set -e
apt-get update && apt-get install -y sudo

dir=$(dirname "$0")

chmod +x "./"
while [[ "$1" ]]; do
   case "$1" in
      --aws)
          $(sudo)"${dir}"/setup_aws.sh
          ;;
    esac
    shift
done
