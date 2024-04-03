// Copyright (c) 2024 Julianne Leblanc-Peltier All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: April 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const length = parseInt(document.getElementById("length-of-triangle").value)
  const width = parseInt(document.getElementById("base-of-triangle").value)
  const height = parseInt(document.getElementById("height-of-triangle").value)

  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById("volume-of-pyramid").innerHTML = volume.toFixed(2) + " mm³"
}
