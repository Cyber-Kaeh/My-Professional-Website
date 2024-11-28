#!/bin/bash

# Navigate to the deployment directory
cd /home/u196611491/domains/anthonyallen.dev/public_html/

# Remove old files
rm -rf *

# Copy the new build files
cp -r /home/u196611491/My-Professional-Website/dist/* .

# Ensure proper file permissions
chmod -R 755 /home/u196611491/domains/anthonyallen.dev/public_html/
