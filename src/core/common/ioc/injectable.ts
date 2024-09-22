import { Injectable } from '@nestjs/common';

export function injectable(): ClassDecorator {
  return Injectable();
}
