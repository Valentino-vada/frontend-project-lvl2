# Gendiff - difference calculator:
[![Actions Status](https://github.com/Valentino-vada/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Valentino-vada/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/d6a88b164af7495b24d3/maintainability)](https://codeclimate.com/github/Valentino-vada/frontend-project-lvl2/maintainability)
![autolinting](https://github.com/Valentino-vada/frontend-project-lvl2/workflows/autolinting/badge.svg)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d6a88b164af7495b24d3/test_coverage)](https://codeclimate.com/github/Valentino-vada/frontend-project-lvl2/test_coverage)

## Description:
Gendiff - program for calculating the differences between two tree files with main extensions .json, .yaml(.yml)

## Requirements:
Used the version when developing v14.17.2 Node.js
It is recommended to use a version not lower than v14.17.2 Node.js

## Installation:
Just copy and run these commands in the terminal one by one

$ git clone git@github.com:Valentino-vada/frontend-project-lvl2.git

$ make install

Get help information

$ gendiff -h

Compare two files

$ gendiff file1.json file2.json

Compare two files using other formats

$ gendiff -f json file3.json file4.json

$ gendiff -f plain file3.json file4.json

Run tests

$ make test
