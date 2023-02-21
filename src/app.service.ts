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
      reFullPath: bus.goFullPath.split(' - '),
    }));
    // console.log(newBusFullPath);

    let result = 0;
    for (const path of newBusFullPath) {
      for (const goPath of path.goFullPath) {
        if (goPath.indexOf(toLocation) !== -1) {
        }
      }
    }
    return result;
  }
}
