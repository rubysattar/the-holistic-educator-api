#!/bin/bash

API="http://localhost:4741"
URL_PATH="/students/:id/show-checkins"

curl "${API}/students/${ID}/show-checkins" \
  --include \
  --request GET \
  --header "Content-Type: application/json"

echo
