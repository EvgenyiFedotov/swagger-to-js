function pathDefaultParams(variants) {
  if (variants.length === 1) {
    const { consume, produce } = variants[0];
    const header = {};

    if (consume) {
      header["Content-Type"] = `"${produce}"`;
    }

    if (produce) {
      header.accept = `"${consume}"`;
    }

    if (Object.keys(header).length) {
      return { header };
    }
  }

  return null;
}

module.exports = { pathDefaultParams };
