FROM jekyll:3.0
MAINTAINER M. Andrew Eick <mae@mae.io>

COPY entrypoint /opt/entrypoint
RUN chmod +x /opt/entrypoint

VOLUME ["/opt/_site", "/opt/ssh-keys"]
WORKDIR /opt/

ENTRYPOINT ["/opt/entrypoint"]

CMD ["build"]
