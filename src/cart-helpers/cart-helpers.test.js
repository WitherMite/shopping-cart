import { describe, it, expect, vi } from "vitest";
import {
  addToCart,
  removeFromCart,
  deleteEntryFromCart,
} from "./cart-helpers.js";
import testEntries from "../components/CartEntry/testEntries.js";

describe("Cart state helper functions", () => {
  describe("addToCart", () => {
    it("Adds new entry to cart with count matching count arg", () => {
      const fn = vi.fn();
      const newItem = {
        id: 4,
        title: "foo",
        price: "69",
      };
      addToCart(testEntries, newItem, 4, fn);

      const newCart = fn.mock.lastCall[0];
      expect(newCart).toStrictEqual(expect.arrayContaining(testEntries));
      expect(newCart).toContainEqual({ ...newItem, count: 4 });
    });
    it("Increases count prop of existing entries by count arg", () => {
      const fn = vi.fn();
      addToCart(testEntries, testEntries[1], 2, fn);

      const newCart = fn.mock.lastCall[0];
      expect(newCart.length).toBe(testEntries.length);
      expect(newCart).toContainEqual(testEntries[0]);
      expect(newCart).toContainEqual(testEntries[2]);
      expect(newCart).toContainEqual({
        ...testEntries[1],
        count: testEntries[1].count + 2,
      });
    });
    describe("Errors", () => {
      it.each([0, -1, null, undefined, "", "foo", true, {}, () => {}, [[1]]])(
        "Throws error when passed %o as count",
        (badCount) => {
          expect(() =>
            addToCart(testEntries, testEntries[1], badCount, () => {})
          ).toThrow();
        }
      );
      it.each([
        0,
        -1,
        1,
        null,
        undefined,
        "",
        "foo",
        true,
        {},
        () => {},
        [[1]],
        { id: {}, name() {}, price: "hello" },
      ])("Throws error when passed %o as item", (badItem) => {
        expect(() => addToCart(testEntries, badItem, 1, () => {})).toThrow();
      });
    });
  });

  describe("removeFromCart", () => {
    it("Decrements count prop of existing entries", () => {
      const fn = vi.fn();
      removeFromCart(testEntries, testEntries[1], fn);

      const newCart = fn.mock.lastCall[0];
      expect(newCart[1].count).toBe(49);
    });
    it("Removes existing entries if count reaches 0", () => {
      const fn = vi.fn();
      removeFromCart(testEntries, testEntries[0], fn);

      const newCart = fn.mock.lastCall[0];
      expect(newCart).not.toContainEqual(testEntries[0]);
    });
    it("Does not call callback if item doesnt exist", () => {
      const fn = vi.fn();
      const newItem = {
        id: 4,
        title: "foo",
        price: "69",
      };
      removeFromCart(testEntries, newItem, fn);

      expect(fn).not.toHaveBeenCalled();
    });
    describe("Errors", () => {
      it.each([
        0,
        -1,
        1,
        null,
        undefined,
        "",
        "foo",
        true,
        {},
        () => {},
        [[1]],
        { id: {}, name() {}, price: "hello" },
      ])("Throws error when passed %o as item", (badItem) => {
        expect(() => removeFromCart(testEntries, badItem, () => {})).toThrow();
      });
    });
  });

  describe("deleteEntryFromCart", () => {
    it("Removes existing entries", () => {
      const fn = vi.fn();
      deleteEntryFromCart(testEntries, testEntries[0], fn);

      const newCart = fn.mock.lastCall[0];
      expect(newCart).not.toContainEqual(testEntries[0]);
    });
    it("Does not call callback if item doesnt exist", () => {
      const fn = vi.fn();
      const newItem = {
        id: 4,
        title: "foo",
        price: "69",
      };
      deleteEntryFromCart(testEntries, newItem, fn);

      expect(fn).not.toHaveBeenCalled();
    });
    describe("Errors", () => {
      it.each([
        0,
        -1,
        1,
        null,
        undefined,
        "",
        "foo",
        true,
        {},
        () => {},
        [[1]],
        { id: {}, name() {}, price: "hello" },
      ])("Throws error when passed %o as item", (badItem) => {
        expect(() =>
          deleteEntryFromCart(testEntries, badItem, 1, () => {})
        ).toThrow();
      });
    });
  });
});
