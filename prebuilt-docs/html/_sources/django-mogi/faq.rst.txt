Frequently Asked Questions
==========================





What metadata does mzml2isa extract from .mzML files ?
''''''''''''''''''''''''''''''''''''''''''''''''''''''

See :ref:`extracted_mzml`.


What metadata does mzml2isa extract from .imzML files ?
'''''''''''''''''''''''''''''''''''''''''''''''''''''''

See :ref:`extracted_imzml`.


.. _issue:

How do I report an issue / ask for a new feature ?
''''''''''''''''''''''''''''''''''''''''''''''''''

Go on the `GitHub repository issue tracker <https://github.com/ISA-tools/mzml2isa/issues>`__
of the program, check that no similar issue already exist, and if so, open
a new issue and include the following information:

  * what software and software version you used (you can know the version
    of the program by running ``mzml2isa --version`` in a terminal)
  * **one of the files you used** (without this, nothing can be done to analyze
    the issue !)
  * any remark you might have on how you think your file may `not` be
    generic (special instrument, multiple instruments, special parameters,
    etc.)
  * the complete traceback of the error if you report a crash


The program crashed when I used it on my files, what should I do ?
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
While the **mzML** file format is supposed to be a standard, it so
happens that depending on what hardware and software were used to
generate .mzML files after a Mass Spectrometry study, some tags may
not be named the same, and that some metadata may be absent or
elsewhere than expected in the final .mzML file.

Even though the example files used to test mzml2isa are thought to be
comprehensive, it might happen that the files you use are one of the
special cases we did not consider. But a new version of the program
may have corrected the bug that hit you already, so make sure **you
are running the latest version of mzml2isa**.

To communicate that crash to us, see :ref:`issue`


