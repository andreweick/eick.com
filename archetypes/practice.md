---
title: "Piano Practice, {{ $myTime := .File.BaseFileName  | replaceRE `^(\d{4}-\d{2}-\d{2})(-.*)` `$1`}} {{ $myTime  | time.Format "January 2, 2006" }}"
date: "{{ $myTime }}"
draft: false
tags:
  - audio
  - piano-practice
playlist:
  title: Libby Practice
  songs:
  - title: Scales
    file: https://static.eick.com/file/static-eick-com/piano/{{ $myTime }}-001.mp3
  - title: Schubert Sonata in A Major, 3rd Movement (run through)
    file: https://static.eick.com/file/static-eick-com/piano/{{ $myTime }}-002.mp3
  - title: Schubert Sonata in A Major, 3rd Movement (run through)
    file: https://static.eick.com/file/static-eick-com/piano/{{ $myTime }}-003.mp3
---
Piano Practice, {{ $myTime  | time.Format "January 2, 2006" }}

<!--more-->

{{< audio >}}
