---
title: "Chatter, {{ $entryDate := .File.BaseFileName | replaceRE `^(\d{4}-\d{2}-\d{2})(-.*)` `$1`}} {{ $entryDate  | time.Format "January 2, 2006" }}"
date: "{{ $entryDate }} {{ .Date | time.Format "15:04:05"}}"
draft: false
description: ""
tags:
  - chatter
hp_exclude: true
---
