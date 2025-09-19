Frequently Asked Questions
==========================



What metadata does nmrml2isa extract from .nmrML files ?
''''''''''''''''''''''''''''''''''''''''''''''''''''''''
nmrml2isa extracts a lot more information than it actually writes to the
final ISA-Tab files. To see a list of the metadata that are extracted
and can be accessed, look at the :doc:`extracted` page.

.. _issue:

How do I report an issue / ask for a new feature ?
''''''''''''''''''''''''''''''''''''''''''''''''''

Go on the `GitHub repository issue tracker <https://github.com/ISA-tools/nmrml2isa/issues>`__
of the program, check that no similar issue already exist, and if so, open
a new issue and include the following information:

  * what software and software version you used (you can know the version
    of the program by running ``nmrml2isa --version`` in a terminal)
  * **one of the files you used** (without this, nothing can be done to analyze
    the issue !)
  * any remark you might have on how you think your file may `not` be
    generic (special instrument, multiple instruments, special parameters,
    etc.)
  * the complete traceback of the error if you report a crash


The program crashed when I used it on my files !
''''''''''''''''''''''''''''''''''''''''''''''''
As the **nmrML** file format is quite new, there is still issues to fix
concerning the standardization of the format. The converter might not
work as intended, there might be missing tags in the nmrML file you tried
to parse.

But most of the times those problems are not really complicated to mend,
and they help making nmrml2isa a more and more generic program.

In order to help the resolution of such problems, see :ref:`issue`



The parameter `xxxxx` does not get extracted properly !
'''''''''''''''''''''''''''''''''''''''''''''''''''''''
First of all: is it present in the source .nmrML file ? It could happen that
some parameters were not successfully written into the converted file when
the nmrML converter converted the Raw NMR files.

Also, nmrml2isa relies on **controlled vocabulary terms** to extract those
parameters from the source nmrML, so if the parameters are present but
not labeled, there are large chances those parameters won't be extracted
from the nmrML file.

If however you still think the problem comes from our side, see :ref:`issue`


The parameter `xxxxx` is not extracted !
''''''''''''''''''''''''''''''''''''''''
There is large chances that if a parameter you want to extract was not
extracted is that the extraction for that parameter was not implemented.
See :ref:`issue` to report it and create a feature request.
