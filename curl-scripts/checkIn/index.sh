#!/bin/bash

API="http://localhost:4741"
URL_PATH="/students/:id/checkins"

curl "${API}/students/${ID}/checkins" \
  --include \
  --request GET \
  --header "Content-Type: application/json"

echo
