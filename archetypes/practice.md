---
title: "Piano Practice, {{ $entryDate := .File.BaseFileName | replaceRE `^(\d{4}-\d{2}-\d{2})(-.*)` `$1`}} {{ $entryDate  | time.Format "January 2, 2006" }}"
date: "{{ $entryDate }} {{ .Date | time.Format "15:04:05"}}"
draft: false
tags:
  - audio
  - piano-practice
playlist:
  title: Libby Practice
  songs:
  - title: Scales
    file: https://static.eick.com/file/static-eick-com/piano/{{ $entryDate }}-001.mp3
  - title: Schubert Sonata in A Major, 3rd Movement (run through)
    file: https://static.eick.com/file/static-eick-com/piano/{{ $entryDate }}-002.mp3
  - title: Schubert Sonata in A Major, 3rd Movement (run through)
    file: https://static.eick.com/file/static-eick-com/piano/{{ $entryDate }}-003.mp3
---
Piano Practice, {{ $entryDate  | time.Format "January 2, 2006" }}

<!--more-->

{{< audio >}}
