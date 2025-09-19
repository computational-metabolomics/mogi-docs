Installation
============


mzml2isa is available on PyPI, so if ``pip`` is installed on your
machine, installing mzml2isa should be quite straightforward, without
the need to worry about dependencies. It is also possible to install
mzml2isa development version directly from the `mzml2isa GitHub repository <https://github.com/ISA-tools/mzml2isa>`__.

Windows
------------

Windows users can either install mzml2isa as described below or use a 'ready to go' Windows executable **(no python install required)**. The executables be found on the mzml2isa `Github release section  <https://github.com/ISA-tools/mzml2isa/releases>`__. See file mzml2isa_cli.exe.

Dependencies
------------

.. warning::
   Without pip you'll have to install the requirements yourself, otherwise running
   ``setup.py`` will fail when trying to import **mzml2isa** for the first time.

Requirements
''''''''''''

`pronto <https://pypi.python.org/pypi/pronto>`__
   an interface to ontology files (used to import the MS controled vocabulary)

Extras
''''''

`lxml <https://pypi.python.org/pypi/lxml>`_
   an XML parser generally quicker than the builtin python xml.cElementTree
   (used as an alternative to parse the mzML files)

   .. note::

      If installing lxml on windows, you can either:

      1. Compile it directly (requires Microsoft Visual C++ to be installed on the Windows machine):
         run the command ``set STATICBUILD=true && pip install lxml``
      2. Install the `unofficial windows binaries (whls) <http://www.lfd.uci.edu/~gohlke/pythonlibs/#lxml>`__


PyPI (stable version) |PyPI version|
------------------------------------

.. |PyPI version| image:: https://img.shields.io/pypi/v/mzml2isa.svg?style=flat&maxAge=3600
   :target: https://pypi.python.org/pypi/mzml2isa/


With `pip`
''''''''''''

Just run one of the following commands in a terminal:

.. code:: bash

   pip install mzml2isa        # install in /usr, needs super-user rights
   pip install mzml2isa --user # install in ~/.local/


Without `pip`
'''''''''''''

This requires the python ``setuptools`` module to be installed, as well as the
dependencies listed above. Download the latest stable release from the
`PyPI repository of mzml2isa <https://pypi.python.org/pypi/mzml2isa>`__ ,
unpack it and install it by running the following commands:

.. code:: bash

   tar xf mzml2isa-xx.yy.zz.tar.gz # replace with whatever version you downloaded
   cd mzml2isa-xx.yy.zz.tar.gz
   python setup.py install         # will require super-user rights



GitHub (development version) |Build Status|
-------------------------------------------

.. warning::
   Please check the current version of the program passes the Travis CI validation beforehand,
   or you could be installing a non-functional version of the program ! The program is working
   if the badge above displays |Passing build|.


With `pip`
''''''''''

.. code:: bash

   pip install git+git://github.com/ISA-tools/mzml2isa


Without `pip`
'''''''''''''

.. code:: bash

   git clone https://github.com/ISA-tools/mzml2isa
   cd mzml2isa
   python setup.py install


.. |Build Status| image:: https://img.shields.io/travis/ISA-tools/mzml2isa.svg?style=flat&maxAge=3600
   :target: https://travis-ci.org/ISA-tools/mzml2isa

.. |Passing build| image:: https://img.shields.io/badge/build-passing-brightgreen.svg

