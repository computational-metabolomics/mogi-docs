Installation
============

The recommended installation is via the `toolshed  repository <https://toolshed.g2.bx.psu.edu/>`__. Dependencies should be installed automatically when using Galaxy version >= 16.10.

The dependencies are dealt with Bioconda. To ensure that Bioconda is working check to make sure the following settings are in the config/galaxy.ini file::

   # dependencies before each job runs.
   conda_auto_install = True
   # Set to True to instruct Galaxy to install Conda from the web automatically
   # if it cannot find a local copy and conda_exec is not configured.
   conda_auto_init = True
