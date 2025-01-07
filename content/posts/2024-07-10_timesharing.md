+++
title = "Timesharing"

[extra]
draft = true
+++

- when i first learned about operating systems and processes in general i was confused why there was such an emphasis on 
  - multiprocessing threading, making multiple processes run on the same machine
  - isolation, on keeping one process from interfering with another
- in 6.033, was surprised to learn that the [https://dsf.berkeley.edu/cs262/unix.pdf](unix paper) was subtitled "timesharing system" 
- turns out, during the days when computers were expensive and big and a rarity, it was much more important to have computers run all the time than to have each process run in time
  - you would submit your job to a control center and they would schedule them to be run (hence time sharing)
  - insert some cool multimedia
- this philosophy has carried over to now 
- this represented the first time when code written by separate people would be run on the same machine and had the potential to interact
  - not safe!
- nowadays we submit jobs to ml servers for that sweet gpu compute
  - i think we're in that moment in time where having models take a long time to train is still a concern
  - maybe very soon compute will catch up with models