import { left, right } from 'fp-ts/lib/Either';
import { Task } from 'fp-ts/lib/Task';
import { TaskEither } from 'fp-ts/lib/TaskEither';
import { constRunTaskEither, newTaskEither, runTaskEither } from '../TaskEither';
describe('constRunTaskEither', () => {
    it('should return the run function for a TaskEither<L, A>', () => {
        const te = new TaskEither(new Task(() => Promise.resolve(right(3))));
        const actual = constRunTaskEither(te)();
        const expected = te.run();
        expect(actual).toEqual(expected);
        expect(actual).toEqual(Promise.resolve(right(3)));
    });
});
describe('newTaskEither', () => {
    it('should create a TaskEither<L, A>', () => {
        const te = new TaskEither(new Task(() => Promise.resolve(left('error'))));
        const te_ = newTaskEither(new Task(() => Promise.resolve(left('error'))));
        const actual = te.run();
        const expected = te_.run();
        expect(actual).toEqual(expected);
        expect(actual).toEqual(Promise.resolve(left('error')));
    });
});
describe('runTaskEither', () => {
    it('should run a TaskEither<L, A>', () => {
        const te = new TaskEither(new Task(() => Promise.resolve(right(2))));
        const actual = runTaskEither(te);
        const expected = te.run();
        expect(actual).toEqual(expected);
        expect(actual).toEqual(Promise.resolve(right(2)));
    });
});
//# sourceMappingURL=TaskEither.jest.js.map