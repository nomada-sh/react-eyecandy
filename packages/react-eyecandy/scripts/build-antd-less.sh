#! /bin/bash

cp ./scripts/variable.less ../../node_modules/antd/lib/style/themes/variable.less
lessc --js ../../node_modules/antd/dist/antd.variable.less ./static/eyecandy.css