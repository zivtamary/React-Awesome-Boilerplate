import { nanoid } from 'nanoid';

// Utils
import { getRandomInt } from './getRandomInt';

/**
 * Mock API call
 * @param payload
 * @param {number} timeout
 * @returns {Promise<string>}
 */
export const mockIncrement = (payload: number, timeout: number = 1000) => {
	const randomInt = getRandomInt(9);
	const callBack = (resolve: Function, reject: Function) =>
		randomInt > 1
			? resolve({
					message: 'Mock increment API success!',
					data: payload
			  })
			: reject({
					message: 'Mock increment API error',
					id: nanoid.nanoid()
			  });

	return new Promise<any>((resolve, reject) => {
		setTimeout(() => callBack(resolve, reject), timeout);
	});
};
