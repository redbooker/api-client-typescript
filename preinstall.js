const { exec } = require('child_process');
const os = require("os")
const platform = os.platform()
if(process.env.npm_execpath.indexOf('yarn') === -1) {
  throw new Error('Nash SDK must be installed with Yarn: https://yarnpkg.com/')
}

if (platform === "darwin") {
  exec('find /usr /opt -name "gmp.h"', (err, stdout, stderr) => {
    if (err) {
      return
    }
    const libgmpPaths = stdout.split("\n").filter(line => {
      if (line.length === 0) {
        return false
      }
      if (line.includes("Permission denied")) {
        return false
      }
      return true
    })

    if (libgmpPaths.length === 0) {
      throw new Error("To use Nash SDK you must have libgmp installed, you can install it with homebrew by typing `brew install gmp`")
    }
  })
}
