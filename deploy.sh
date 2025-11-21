PROJECT=microschool-gongdo
SERVICE=pathfolio-proto-fe   
REGION=asia-northeast1  

env_vars="ENV=production"
env_vars="${env_vars}VERSION=${VERSION}"

gcloud run deploy $SERVICE \
  --project=$PROJECT \
  --region=$REGION \
  --allow-unauthenticated \
  --set-env-vars=$env_vars \
  --source .