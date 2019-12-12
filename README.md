# Figlify
This is a wrapper package for [figlet](https://www.npmjs.com/package/figlet) package

The original package (as of version ```1.2.4```) does work as a CLI if installed globally. So I created this wrapper for an easier use.

# Install
```
npm i -g figlify
```

# Use
```
$ figlify "MeowMeow" --copy
  __  __                      __  __                    
 |  \/  | ___  _____      __ |  \/  | ___  _____      __
 | |\/| |/ _ \/ _ \ \ /\ / / | |\/| |/ _ \/ _ \ \ /\ / /
 | |  | |  __/ (_) \ V  V /  | |  | |  __/ (_) \ V  V / 
 |_|  |_|\___|\___/ \_/\_/   |_|  |_|\___|\___/ \_/\_/  
                                                        
```

# Manual

```
Flags:                          Description:                     
------------------------------  ---------------------------------
--S, --s, --silent, --Silent    Disables console output          
--copy, --cp                    Executes pbcopy with the result  
--m, --manual, --manual, --man  Shows all available CLI arguments
```


- This package inherits original [MIT license](https://github.com/patorjk/figlet.js/blob/master/LICENSE.txt)