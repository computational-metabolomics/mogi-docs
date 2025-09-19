Installation
============


nmrml2isa is available on PyPI, so if `pip` is installed on your
machine installing nmrml2isa should be quite straightforward, without
the need to worry about dependencies. It is also possible to install
nmrml2isa development version from its `GitHub repository <https://github.com/ISA-tools/nmrml2isa>`__.
Please note that the GitHub version of the program may fix bugs but
also introduce new bugs, and that it might not work on your files.

Windows
------------

Windows users can either install mzml2isa as described below or use a 'ready to go' Windows executable **(no python install required)**. The executables be found on the nmrml2isa `Github release section  <https://github.com/ISA-tools/nmrml2isa/releases>`__. See file nmrml2isa_cli.exe.


Dependencies
------------

.. warning::
   Without pip you'll have to install the requirements yourself, otherwise running
   ``setup.py`` will fail when trying to import **nmrml2isa** for the first time.

Requirements
''''''''''''

`pronto <https://pypi.python.org/pypi/pronto>`__
   an interface to ontology files (used to import the MS controlled vocabulary)

`chainmap <https://pypi.python.org/pypi/chainmap>`_ (required for Python 2 or PyPy)
   a polyfill implementation of collections.ChainMap (available in Python 3 stdlib)

Extras
''''''

`lxml <https://pypi.python.org/pypi/lxml>`_
   an XML parser generally quicker than the builtin python xml.cElementTree
   (used as an alternative to parse the nmrML files)

   .. note::

      If installing lxml on windows, you can either:

      1. Compile it directly (requires Microsoft Visual C++ to be installed on the Windows machine):
         run the command ``set STATICBUILD=true && pip install lxml``
      2. Install the `unofficial windows binaries (whls) <http://www.lfd.uci.edu/~gohlke/pythonlibs/#lxml>`__


PyPI (stable version) |PyPI version|
------------------------------------

.. |PyPI version| image:: https://img.shields.io/pypi/v/nmrml2isa.svg?style=flat&maxAge=3600
   :target: https://pypi.python.org/pypi/nmrml2isa/
   :align: middle


With `pip`
''''''''''

Just run one the following commands in a terminal:

.. code:: bash

   pip install nmrml2isa        # install for all users, needs super-user rights
   pip install nmrml2isa --user # install only for the current user, no rights needed


Without `pip`
'''''''''''''

This requires the python ``setuptools`` module to be installed, as well as the dependencies listed above. Download the latest stable release
from the `PyPI repository <https://pypi.python.org/pypi/nmrml2isa>`__, unpack it and install it
by running the following commands:

.. code:: bash

   tar xf nmrml2isa-xx.yy.zz.tar.gz # replace with whatever version you downloaded
   cd nmrml2isa-xx.yy.zz.tar.gz
   python setup.py install          # will require super-user rights



GitHub (development version) |Build Status|
-------------------------------------------

.. warning::
   Please check the current version of the program passes the Travis CI validation beforehand,
   or else you're likely to install a non-functioning version of the program ! The program
   is working if the badge above displays |Passing build|.


With `pip`
''''''''''

.. code:: bash

   pip install git+git://github.com/ISA-tools/nmrml2isa


Without `pip`
'''''''''''''

.. code:: bash

   git clone https://github.com/ISA-tools/nmrml2isa
   cd nmrml2isa
   python setup.py install


.. |Build Status| image:: https://img.shields.io/travis/ISA-tools/nmrml2isa.svg?style=flat&maxAge=2592000
   :target: https://travis-ci.org/ISA-tools/nmrml2isa
   :align: middle

.. |Passing build| image:: https://img.shields.io/badge/build-passing-brightgreen.svg

