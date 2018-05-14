const {spawn} = require("child_process");

spawn("yarn",["start"],{
  cwd:"client",
  stdio:"inherit",
  shell:true
});