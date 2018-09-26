# No Zone Test
Component 'pushy' is set to OnPush.
Application disabled zone.

Effects are:
+ 1. Updates throgh bindings must be triggered through app.tick
+ 2. Updates through methods won't work with zone, you must call CD yourself
+ 3. Events from inside will call the CD if zone is available.