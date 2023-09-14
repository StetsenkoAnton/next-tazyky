"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import PageHeader from "@/components/PageHeader";
import UiInput from "@/components/UiInput";
import {getDbCollection, getDbData} from "@/firebase/db";
import {useEffect, useState} from "react";

export default function Test() {
  var width = 320;
  var height = 0;
  var streaming = false;
  var video = null;
  var canvas = null;
  var photo = null;
  var startbutton = null;
  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    })
      .then(function(stream) {
        video.srcObject = stream;
        video.play();
        startbutton.classList.add('streaming');
      })
      .catch(function(err) {
        console.log("An error occurred: " + err);
      });
    video.addEventListener('canplay', function(ev) {
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth / width);
        if (isNaN(height)) {
          height = width / (4 / 3);
        }
        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        streaming = true;
      }
    }, false);
    startbutton.addEventListener('click', function(ev) {
      takepicture();
      ev.preventDefault();
    }, false);
  }
  function takepicture() {
    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);
      var data = canvas.toDataURL('image/png');
      let photo = new Image;
      photo.src = data;
      let botton = document.createElement('button');
      botton.textContent = 'del';
      botton.addEventListener('click', () => {
        botton.remove();
        photo.remove();
      });
      document.querySelector('.output').append(photo, botton);
    }
  }
  useEffect(() => {
    startup()
  }, []);
  return (
    <div className="contentarea">
      <div className="camera">
        <video id="video">Видеопоток недоступен.</video> <button id="startbutton">Сделать фото</button>
      </div><br/>
      <canvas id="canvas"></canvas>
      <div className="output"></div>
    </div>
  )
}
