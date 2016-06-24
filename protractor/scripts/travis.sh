if test "$TRAVIS" = "true"; then
  sh -e /etc/init.d/xvfb start
  node_modules/.bin/webdriver-manager update --standalone --firefox
  nohup node_modules/.bin/webdriver-manager start 2>&1 &
  sleep 5
	echo $DISPLAY
fi
