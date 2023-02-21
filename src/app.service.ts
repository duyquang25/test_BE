import { Injectable } from '@nestjs/common';
import { busFullPath } from './data';
import { GetBusDto } from './get-bus.dto';

@Injectable()
export class AppService {
  constructor() {}

  getHello() {
    return 'Heelo API to the moon !';
  }

  handle(query: GetBusDto) {
    const { toLocation, fromLocation } = query;

    // convert data
    const newBusFullPath = busFullPath.map((bus) => ({
      ...bus,
      goFullPath: bus.goFullPath.split(' - '),
      reFullPath: bus.reFullPath.split(' - '),
    }));

    let result = [];
    for (const path of newBusFullPath) {
      let checkGo = -1;
      for (const goPath of path.goFullPath) {
        if (goPath === fromLocation) {
          checkGo = 0;
        }
        if (checkGo === 0 && goPath === toLocation) {
          checkGo = 1;
        }
      }
      if (checkGo === 1) {
        result.push(path.busName);
      }

      let checkRe = -1;
      for (const goPath of path.reFullPath) {
        if (goPath === fromLocation) {
          checkRe = 0;
        }
        if (checkRe === 0 && goPath === toLocation) {
          checkRe = 1;
        }
      }
      if (checkRe === 1) {
        result.push(path.busName);
      }
    }
    return result;
  }
}
