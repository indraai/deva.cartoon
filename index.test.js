"use strict";
// Copyright ©2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:23045849083163412537 LICENSE.md
// Cartoon Deva test file

const {expect} = require('chai')
const CartoonDeva = require('./index.js');

describe(CartoonDeva.me.name, () => {
  beforeEach(() => {
    return CartoonDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(CartoonDeva).to.be.an('object');
    expect(CartoonDeva).to.have.property('agent');
    expect(CartoonDeva).to.have.property('vars');
    expect(CartoonDeva).to.have.property('listeners');
    expect(CartoonDeva).to.have.property('methods');
    expect(CartoonDeva).to.have.property('modules');
  });
})
