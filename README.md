## build an image
    docker build -t <image_name> .
## build container
    docker run -p <url_port>:<exposed_port> <image_name>
   ### remove container when it gets stopped automatically
    docker run -p <url_port>:<exposed_port> --rm <image_name>
   ### create custom container name
     docker run -p <url_port>:<exposed_port> --rm --name <container_name> <image_name>
   ### stop container
     docker stop <container_name>

## push image
   ### create tag
     docker tag <image_name> <user_name>/<repo_name>:<tag>
   ### push to tag
     docker push <user_name>/<repo_name>:<tag>
