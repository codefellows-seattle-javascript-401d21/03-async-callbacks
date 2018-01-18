# 03 Async Callbacks

## Exported Values
lib/reader.js: The readFiles modules is exported
```
Function:   readFiles
Description:             Given an array of relative filepaths and a callback function, this function
                         will recursively read and process those files. They will then be returned
                         via the callback function as the result argument.
Param[in]:  paths        Array of relative filepaths from the directory the module was required
Param[in]:  callback     Success/Failure callback: Called as callback(err) for failure, callback(null, result) for success
Param[out]: undefined    No value is returned from this function excluding through the success callback
```

