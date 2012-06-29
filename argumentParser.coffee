module.exports = (options) ->
  options.help =
            alias: ['-h']
            action: printHelp

  for arg in process.argv
    if (arg[0] == '-' && arg[1] == '-') || (arg[0] == '-' && arg[1] != '-')
      parsedArg = if arg.indexOf('--') != -1 then arg.substring 2, arg.length else arg.substring 1, arg.length
      if options[parsedArg] != undefined then if options[parsedArg].action then options[parsedArg].action()

printHelp = ->
  console.log("This is the Help!")