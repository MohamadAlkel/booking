/**
 * App Routes
 */
export const enum AppRoutes {
    Base = "/",
    Rest = "*",
}

export const enum GenericRoutes {
    MainList = "/hotel-list",
    MyBooking = "/my-booking",
    Details = "/details"
}

export const enum HotelsRoutes {
    MainList = GenericRoutes.MainList,
    MyBooking = GenericRoutes.MyBooking,
    Details = GenericRoutes.Details + "/:id",
}
