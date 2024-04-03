// Copyright (c) 2024 Julianne Leblanc-Peltier All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: April 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const length = parseFloat(document.getElementById("length-of-pyramid").value)
  const width = parseFloat(document.getElementById("width-of-pyramid").value)
  const height = parseFloat(document.getElementById("height-of-pyramid").value)

  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById("volume-of-pyramid").innerHTML = volume.toFixed(2) + " mm³"
}
