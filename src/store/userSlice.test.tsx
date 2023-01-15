import { store } from "./store";
import { fetchUserData, initialState } from "./userSlice";

test("should have state with initialState data", () => {
  const state = store.getState().user;
  expect(state).toEqual(initialState);
});

test("should have state with updated data after successful login", async () => {
  const state = store.getState().user;
  expect(state).toEqual(initialState);
  await store.dispatch(
    fetchUserData({ username: "test@test.pl", password: "test" })
  );
  const updatedState = store.getState().user;
  expect(updatedState).toEqual({
    name: "user",
    role: "admin",
    status: "fulfilled",
    success: true,
  });
});

test("should have state with updated data after unsuccessful login", async () => {
  const state = store.getState().user;
  expect(state).toEqual(initialState);
  await store.dispatch(
    fetchUserData({ username: "wrong_data", password: "wrong_data" })
  );
  const updatedState = store.getState().user;
  expect(updatedState).toEqual({
    name: "",
    role: "",
    status: "fulfilled",
    success: false,
  });
});
